import { NextApiRequest, NextApiResponse } from 'next'

const contactData: ContactProps = {
  iconLink: [
    {
      img: '/github.svg',
      link: 'https://github.com/jsg3121/devfolio_v2',
    },
    {
      img: '/velog.svg',
      link: 'https://velog.io/@jsg3121',
    },
    {
      img: '/gmail.svg',
      link: 'mailto://xodm95@gmail.com',
    },
  ],
  iconFile: [
    {
      img: '/pdf.svg',
      path: 'test.pdf',
    },
    {
      img: '/ppt.svg',
      path: 'test.pdf',
    },
    {
      img: '/word.svg',
      path: 'test.pdf',
    },
  ],
}

const handler = (_: NextApiRequest, res: NextApiResponse<ContactProps>) => {
  res.send(contactData)
  res.end()
}

export default handler
