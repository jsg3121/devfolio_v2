import { NextApiRequest, NextApiResponse } from 'next'

const contactData: ContactProps = {
  iconLink: [
    {
      name: 'Github 구경가기',
      img: '/github.svg',
      link: 'https://github.com/jsg3121/devfolio_v2',
    },
    {
      name: '블로그 구경가기',
      img: '/velog.svg',
      link: 'https://velog.io/@jsg3121',
    },
    {
      name: '메일 보내기',
      img: '/gmail.svg',
      link: 'mailto://xodm95@gmail.com',
    },
  ],
  iconFile: [
    {
      name: 'PDF 다운로드',
      img: '/pdf.svg',
      path: 'test.pdf',
    },
    {
      name: 'PowerPoint 다운로드',
      img: '/ppt.svg',
      path: 'test.pdf',
    },
    {
      name: '워드 파일 다운로드',
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
