/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo, useEffect } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import { Storage } from '../../../../firebase/storage/Storage';
import { Auth } from '../../../../App';
import Users from '../../../../firebase/firestore/User';
import { IUser } from '../../../../models/User.model';

export interface IProps {
  className?: string;
}

const baseStyle = {};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

interface T extends File {
  preview: string;
}

const EditAvatar: React.FC<IProps> = ({ className, children }) => {
  const {user, authUser} = Auth.useContainer();
  const [files, setFiles] = useState<T[]>([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    multiple: false,
    accept: 'image/jpeg',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  useEffect(
    () => {
      const load = async () => {
        if (files.length && user) {
          const avatarUrl = await Storage.uploadUserAvatar(user.id, files.find(Boolean) as File);
          const updatedUser: IUser = {
            ...user,
            avatarUrl
          }
          await Users.update(updatedUser)
          files.forEach(file => URL.revokeObjectURL(file.preview));
        }
      };
      load();
    },
    [files, user]
  );

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragAccept, isDragActive, isDragReject]
  );

  return (
    <div className={className}>
      <div {...getRootProps({ style })}>
        {children}
        <input {...getInputProps()} />
      </div>
    </div>
  );
};

export default EditAvatar;
