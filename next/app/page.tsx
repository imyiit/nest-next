"use client";

import Form from "@/ui/DataEntry/Form";
import Button from "@/ui/DataEntry/Form/Button";
import { Password, Text, Number } from "@/ui/DataEntry/Form/Inputs";
import Switch from "@/ui/DataEntry/Form/Switch";

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

          <Number
            name="Number"
            validate={(value) => {
              if (value > 5) return "Sayı 5'den büyük.";

              return "";
            }}
          />

          <Switch name="Switch" validate={(value)=>{
            
            if(!value) return "Seçmeniz gerek."

            return ""
          }}/>

          <Button name="submit">Label</Button>
        </Form>
      </div>
    </div>
  );
}
