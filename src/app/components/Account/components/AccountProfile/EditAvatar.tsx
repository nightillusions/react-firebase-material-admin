import React, { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Auth } from '../../../../App';
import Users from '../../../../firebase/firestore/User';
import { Storage } from '../../../../firebase/storage/Storage';
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
  const { user } = Auth.useContainer();
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
    onDrop: async acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
      if (files.length && user) {
        const avatarUrl = await Storage.uploadUserAvatar(
          user.id,
          files.find(Boolean) as File
        );
        const updatedUser: IUser = {
          ...user,
          avatarUrl
        };
        await Users.update(updatedUser);
      }
    }
  });

  useEffect(
    () => () => {
      if (files.length) {
        files.forEach(file => URL.revokeObjectURL(file.preview));
      }
    },
    [files]
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
