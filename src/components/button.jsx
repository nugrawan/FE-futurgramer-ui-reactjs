import * as React from "react";
import { cva } from "class-variance-authority";

import { rc } from "@/lib/utils";

const buttonVariants = cva("rounded-full font-semibold sm:text-base", {
  variants: {
    variant: {
      default: "hover:opacity-80 bg-primary-default text-white",
      secondary: "bg-white text-primary-default border border-primary-default hover:bg-gray-100",
    },
    size: {
      default: "px-5 py-2 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={rc(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
