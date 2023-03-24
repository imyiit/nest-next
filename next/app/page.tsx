"use client";

import Form from "@/ui/Navigation/Form";

import Button from "@/ui/Navigation/Form/Button";
import { Password, Text } from "@/ui/Navigation/Form/Inputs";

export async function generateMetadata() {
  return { title: "Ben Yiit" };
}

export default function Page() {
  return (
    <div className="flex w-full flex-col relative ">
      <div className="w-full">
        <Form
          onValid={(value) => {
            console.log(value);
          }}
        >
          <Text
            name="Text"
            placeholder="test"
            validate={(value) => {
              if (value.length < 10) return "asd";

              return "";
            }}
          />

          <Password
            name="Password"
            validate={(value) => {
              if (value.length < 10) return "asd";

              return "";
            }}
          />

          <Button name="submit">Label</Button>
        </Form>
      </div>
    </div>
  );
}
