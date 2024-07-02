"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// Toastify
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "react-toastify/dist/ReactToastify.min.css";

// notistack
import { SnackbarProvider, useSnackbar } from "notistack";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "(+91) 8220540673",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "roshantamilselvam@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    desc: "No.12, Kovalan Street,Cuddalore-OT,Cuddalore,TamilNadu,India",
  },
];

import { motion } from "framer-motion";

// email api format
async function handleSubmit(event, formref, enqueueSnackbar) {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "141ca43e-3520-4c5c-83f1-591cf256975b");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      enqueueSnackbar("Message sent successfully!", { variant: "success" });
      formref.current.reset();
      console.log(result);
    } else {
      enqueueSnackbar("Failed to send message.", { variant: "error" });
    }
  } catch (error) {
    enqueueSnackbar("Request failed: " + error.message, { variant: "error" });
    console.error(error);
  }
}

const ContactForm = () => {
  const formref = useRef(null);
  const { enqueueSnackbar } = useSnackbar();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form fields */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formref}
              onSubmit={(event) =>
                handleSubmit(event, formref, enqueueSnackbar)
              }
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-yellow-500">Let's Work Together</h3>
              {/* <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                animi esse molestias? Praesentium, suscipit?
              </p> */}
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  required
                  name="firstname"
                  placeholder="Firstname"
                />
                <Input
                  type="text"
                  required
                  name="lastname"
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  required
                  name="email"
                  placeholder="Email address"
                />
                <Input
                  type="phone"
                  name="phone"
                  required
                  placeholder="Phone number"
                />
              </div>
              {/* Select field */}
              <Select name="Service">
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Developement">
                      Web Developement
                    </SelectItem>
                    <SelectItem value="Responsive Web Design">
                      Responsive Web Design
                    </SelectItem>
                    <SelectItem value="Front-end Developer">
                      Front-end Developer
                    </SelectItem>
                    <SelectItem value="UI/UX Designer">
                      UI/UX Designer
                    </SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                name="Message"
                className="h-[200px]"
                placeholder="Type your message here..."
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info fields */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-yellow-500 rounded-md flex justify-center items-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="xl:text-xl text-base">{item.desc}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Contact = () => (
  <SnackbarProvider maxSnack={3}>
    <ContactForm />
  </SnackbarProvider>
);

export default Contact;
