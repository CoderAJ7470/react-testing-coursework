import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import Tags from './Tags';
import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';

describe('The Tags component', () => {
 const tagsServer = setupServer(
  http.get('http://localhost:3004/tags', () => {
   return HttpResponse.json([{ id: '1', name: 'bar' }]);
  })
 );

 beforeAll(() => tagsServer.listen());
 afterAll(() => tagsServer.close());

 afterEach(() => tagsServer.resetHandlers());

 it('should render the tags coming from the API response', async () => {
  render(<Tags />);

  const tags = await screen.findAllByTestId('tag');

  expect(tags).toHaveLength(1);
 });
});
