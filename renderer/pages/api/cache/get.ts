import type { NextApiHandler } from 'next';
import { cache } from '../../../lib/cache';

const handler: NextApiHandler = (req, res) => {
  cache.set('hello', 'world');
  const item = cache.get('hello');
  console.log(`get ${item} in cache`);

  res.send({ item: `retrieved ${item} from the cache` });
};

export default handler;
