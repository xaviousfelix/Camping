"use client";
import { useActionState } from "react";
import { toast } from "sonner"
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";
const initialState = {
  message: "",
};

const FormContainer = ({ action, children }:
   {action:actionFunction, children: React.ReactNode }) => {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message, {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
