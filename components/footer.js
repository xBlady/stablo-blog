import React from "react";
import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Link from 'next/link';

export default function Footer(props) {
  return (
    <Container id="footer" className="footer mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-center">
        <iframe
          src="https://bartpasierbek.substack.com/embed"
          width="100%"
          height="300"
          style={{ border: "1px solid #EEE", background: "white" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} Bartłomiej Pasierbek.
        All rights reserved.
      </div>
      <ThemeSwitch />
    </Container>
  );
}
