import React from 'react';
import {Text} from 'react-native';

interface HeaderProps {
  title: string;
  secondTitle?: string;
  thirdTitle?: string;
  subtitle: string;
}

export default function Header({
  title,
  secondTitle,
  thirdTitle,
  subtitle,
}: HeaderProps): React.JSX.Element {
  return (
    <>
      <Text className="font-bold text-3xl text-primary">{title}</Text>
      {!!secondTitle && (
        <Text className="font-bold text-3xl">{secondTitle}</Text>
      )}
      {!!thirdTitle && <Text className="font-bold text-3xl">{thirdTitle}</Text>}
      <Text className="text-sm w-3/4 leading-4 mt-1">{subtitle}</Text>
    </>
  );
}
