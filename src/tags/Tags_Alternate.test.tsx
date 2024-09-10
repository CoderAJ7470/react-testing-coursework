import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import Tags from './Tags';
import axios from 'axios';

describe('The Tags component', () => {
 // const tagsServer = setupServer(
 //  http.get('http://localhost:3004/tags', () => {
 //   return HttpResponse.json([{ id: '1', name: 'bar' }]);
 //  })
 // );

 // beforeAll(() => tagsServer.listen());
 // afterAll(() => tagsServer.close());

 // afterEach(() => tagsServer.resetHandlers());

 // This approach NOT recommended by creators of React Testing Library
 it('should render the tags coming from the API response', async () => {
  const mockResponse = {
   data: [{ id: '1', name: 'bar' }],
  };

  vi.spyOn(axios, 'get').mockResolvedValue(mockResponse);
  render(<Tags />);

  const tags = await screen.findAllByTestId('tag');

  expect(tags).toHaveLength(1);
 });
});
