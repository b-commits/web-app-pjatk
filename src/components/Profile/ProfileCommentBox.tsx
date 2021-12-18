import React, { useEffect, useState } from 'react';
import { getUserProfilePageComments } from './ApiCalls';
import { useParams } from 'react-router-dom';
import { ProfileComment } from './ProfileComment';

interface RouteParams {
  id: string;
}

export const ProfileCommentBox: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [profileComments, setProfileComments] = useState<any>([]);

  useEffect(() => {
    getUserProfilePageComments(id).then((listings: any) => {
      setProfileComments(listings.data);
    });
  }, []);

  return (
    <div style={{ padding: 14 }} className="App">
      <h1>Comments</h1>
      {profileComments.map((comment: any, index: any) => {
        return <ProfileComment key={index} ProfileCommentProps={comment} />;
      })}
    </div>
  );
};
