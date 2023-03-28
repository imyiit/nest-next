"use client";
import React from "react";

import Button from "@/ui/DataEntry/Form/Button";
import Form from "@/ui/DataEntry/Form";
import { Text, Password } from "@/ui/DataEntry/Form/Inputs";

const Page = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center flex-1">
      <div>
        <Form
          onValid={(values) => {
            console.log(values);
          }}
        >
          <div className="font-bold flex justify-center items-center text-white">
            Kayıt Formu
          </div>

          <Text name="username" placeholder="Kullanıcı adı" />
          <Text name="email" placeholder="Örn: user@mail.com" />
          <Password name="password1" placeholder="Şifre" />
          <Password name="password2" placeholder="Şifre tekrarı" />
          <Button name="submit">Kayıt ol</Button>
        </Form>
      </div>
    </div>
  );
};

export default Page;
