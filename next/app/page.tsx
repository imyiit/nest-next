"use client";

import Form from "@/ui/Navigation/Form";

export async function generateMetadata() {
  return { title: "Ben Yiit" };
}

export default function Page() {
  return (
    <div className="flex w-full flex-col relative ">
      <div className="w-full">
        <Form>
          
        </Form>
      </div>
    </div>
  );
}
