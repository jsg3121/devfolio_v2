import { NextApiRequest, NextApiResponse } from 'next'

const profile = ['/profile.webp', '/profile_2.webp']

const handler = (_: NextApiRequest, res: NextApiResponse<Array<string>>) => {
  res.send(profile)
  res.end()
}
export default handler
