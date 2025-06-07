"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

type UploadResultTypes = {
   public_id: string;
};

const UploadPage = () => {
   const [publicId, setPublicId] = useState("");
   useEffect(() => {
      if (!publicId) return;
      console.log(publicId);
   }, [publicId]);
   return (
      <>
         {publicId && (
            <CldImage src={publicId} width={270} height={180} alt="A review" />
         )}
         <CldUploadWidget
            options={{
               sources: ["local"],
               multiple: false,
            }}
            onSuccess={(result) => {
               const res = result.info as UploadResultTypes;
               if (result.event === "success") {
                  setPublicId(res.public_id);
               }
            }}
            uploadPreset="m4cren"
         >
            {({ open }) => (
               <button className="btn btn-primary" onClick={() => open()}>
                  Upload
               </button>
            )}
         </CldUploadWidget>
      </>
   );
};

export default UploadPage;
