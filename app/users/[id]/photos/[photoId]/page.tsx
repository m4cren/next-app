import React from "react";
interface UserDetailProps {
   params: {
      id: number;
      photoId: number;
   };
}

const PhotoDetails = ({ params: { photoId, id } }: UserDetailProps) => {
   return (
      <div>
         PhotoDetails {photoId} {id}
      </div>
   );
};

export default PhotoDetails;
