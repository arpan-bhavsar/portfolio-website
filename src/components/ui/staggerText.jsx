import React from "react";
import { motion } from "framer-motion";

export default function TextAnimation({
  children,
  divideBy = "word",
  delay = 0.2,
  className = "",
  wordColors = [],
  style = {},
}) {
  if (typeof children !== "string") {
    return <div className={className} style={style}>{children}</div>;
  }

  const elements = divideBy === "word" ? children.split(" ") : children.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            color: wordColors[i] || "inherit",
            marginRight: divideBy === "word" ? "0.3em" : "0",
          }}
        >
          {el}
        </motion.span>
      ))}
    </motion.div>
  );
}
