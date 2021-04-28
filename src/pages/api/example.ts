import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  key: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  res.status(200).json([
    {
      key: 'value',
    },
  ])
}
