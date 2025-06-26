import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as yup from "yup";

const contactFormSchema = yup.object().shape({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  email: yup.string().email("Enter a valid email").required("Required"),
  message: yup.string().required("Required"),
});
console.log(import.meta.env.VITE_SOME_KEY);
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
    resolver: yupResolver(contactFormSchema),
  });
  const form = React.useRef();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmitForm = async (formValues) => {
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    setIsSubmitting(true);
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(() => {
        toast.success("Success", {
          description: "Your message has been sent",
        });
        setIsSubmitting(false);
        reset();
      })
      .catch((error) => {
        toast.error("Error", {
          description: "Your message couldn't be sent",
        });
        setIsSubmitting(false);
        console.log(error);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="grid gap-4">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="sr-only">
              First Name
            </label>
            <input
              {...register("first_name")}
              type="text"
              id="first_name"
              className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-sky-500 focus:ring-sky-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
              placeholder="First Name"
            />
            {errors.first_name && (
              <small className="mt-0.5 text-xs font-medium text-red-500">
                {errors.first_name?.message}
              </small>
            )}
          </div>

          <div>
            <label htmlFor="last_name" className="sr-only">
              Last Name
            </label>
            <input
              {...register("last_name")}
              type="text"
              id="last_name"
              className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-sky-500 focus:ring-sky-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
              placeholder="Last Name"
            />
            {errors.last_name && (
              <small className="mt-0.5 text-xs font-medium text-red-500">
                {errors.last_name?.message}
              </small>
            )}
          </div>
        </div>
        {/* End Grid */}

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            autoComplete="email"
            className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-sky-500 focus:ring-sky-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            placeholder="Email"
          />
          {errors.email && (
            <small className="mt-0.5 text-xs font-medium text-red-500">
              {errors.email?.message}
            </small>
          )}
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows="6"
            className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-sky-500 focus:ring-sky-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            placeholder="Type your message here"
          ></textarea>
          {errors.message && (
            <small className="mt-0.5 text-xs font-medium text-red-500">
              {errors.message?.message}
            </small>
          )}
        </div>
      </div>
      {/* End Grid */}

      <div className="mt-4 grid">
        <button
          type="submit"
          className="inline-flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-lg border border-transparent bg-sky-500 px-4 py-3 text-sm font-medium text-white hover:bg-sky-600 focus:bg-sky-600 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        >
          Send inquiry
        </button>
      </div>

      <div className="mt-3 text-center">
        <p className="text-sm text-gray-500">
          We'll get back to you in 1-2 business days.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
