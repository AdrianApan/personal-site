'use client'

import { motion } from 'framer-motion'

import Post from '@/types/Post'
import { Card } from '@/components/Blog'
import { subtitleVariants, articleVariants } from './LatestPost.animations'

interface Props {
  post: Partial<Post>
}

const LatestPost = ({ post }: Props) => (
  <section className="w-full py-8">
    <div className="max-w-screen-lg px-8 py-6 mx-auto">
      <div className="mb-12 md:mb-8">
        <h2 className="text-3xl font-medium md:text-4xl text-black dark:text-white leading-10 md:leading-12">
          Latest blog post
        </h2>
        <motion.h3
          className="text-md font-normal md:text-lg text-gray-400 dark:text-zinc-500"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          To view all articles, visit the Blog section
        </motion.h3>
      </div>

      <motion.div variants={articleVariants} initial="hidden" animate="visible">
        <Card post={post} />
      </motion.div>
    </div>
  </section>
)

export default LatestPost
