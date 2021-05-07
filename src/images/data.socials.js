import React from "react"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaYoutubeSquare
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon" />,
    url: "https://github.com/P-create02",
  },
  {
    id: 2,
    icon: <FaFacebookSquare className="social-icon" />,
    url: "https://www.facebook.com/wojtek.sikora.754/",
  },
  {
    id: 3,
    icon: <FaYoutubeSquare className="social-icon" />,
    url: "https://www.youtube.com/?gl=PL&hl=pl",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon" />,
    url: "https://www.instagram.com/",
  },
]

export default data
