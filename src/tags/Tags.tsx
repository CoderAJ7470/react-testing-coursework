import { useEffect, useState } from 'react';
import axios from 'axios';

interface Tag {
 id: string;
 name: string;
}

const Tags = () => {
 const [tags, setTags] = useState([]);
 console.log('tags', tags);

 useEffect(() => {
  console.log('called useEffect');

  axios.get('http://localhost:3004/tags').then((response) => {
   console.log('response:', response.data);
   setTags(response.data);
  });
 }, []);

 return (
  <>
   {tags.map((tag: Tag) => (
    <div key={tag.id} data-testid='tag'>
     {tag.name}
    </div>
   ))}
  </>
 );
};

export default Tags;

