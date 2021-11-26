import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import slugify from 'slugify'
import dayjs from 'dayjs'
import markdown from './markdown'
import config from './config'

/** 文章目录地址 */
const postsDirectory = path.join(process.cwd(), 'posts')

/** 友链目录地址 */
const linksDirectory = path.join(process.cwd(), 'lib/links')

/** 友链文件名 */
const linksFileName = 'links.yml'

/** 文章数据和标签数据 */
let postsMap, tagsMap;

function secureDataPosts () {
  if (!postsMap) {
    postsMap = getPostsData().postsMap
  }
}

function secureDataTags () {
  if (!tagsMap) {
    tagsMap = getPostsData().tagsMap
  }
}

function readPostFile (fileName) {
  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
    
  const dateObj = new Date(matterResult.data.date || Date.now())
  // Generate permanent links
  const permalink = dayjs(dateObj).format('YYYYMMDDHHmmss')
  // return JSON serializable data types.
  const dateStr = dayjs(dateObj).format()

  // read result
  return { permalink, ...matterResult.data, date: dateStr }
}

function readPostFileContent (fileName) {
  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // render markdown to html
  return markdown.render(matterResult.content)
}

function getPostsData () {
  const postsMap = new Map()
  const tagsMap = new Map()

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)

  fileNames.forEach(fileName => {
    if (path.extname(fileName) !== '.md') return;

    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    const { permalink, tags = [], ...infos } = readPostFile(fileName)

    const post = { fileName, id , permalink, tags, ...infos }

    // Combine the data with the permalink
    postsMap.set(permalink, post)
    
    tags.forEach(tag => {
      // Generate slugify tags
      const slugTag = slugify(tag, {
        replacement: "-",
        remove: /[&,+()$~%.'":*?<>{}]/g,
        lower: true
      })
      // Combine the data with the tag
      if (tagsMap.has(slugTag)) {
        tagsMap.get(slugTag).push(post)
      } else {
        tagsMap.set(slugTag, [post])
      }
    })
  })

  return { postsMap, tagsMap }
}

export function getLastPostsData () {
  secureDataPosts()
  const sortData = Array.from(postsMap.values()).sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return sortData.slice(0, config.lastPostsCount)
}

export function getSortedPostsData() {
  secureDataPosts()
  return Array.from(postsMap.values()).sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getSortedTagsData () {
  secureDataTags()
  return Array.from(tagsMap.keys()).map(tag => {
    return {
      tag,
      count: tagsMap.get(tag).length
    }
  })
}

export function getAllPostIds() {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: { permalink: '20211110123212' }
  //   },
  // ]
  secureDataPosts()
  return Array.from(postsMap.values()).map(({ permalink }) => {
    return {
      params: {
        permalink
      }
    }
  })
}

export function getAllTags () {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: { tag: 'css' }
  //   },
  // ]
  secureDataTags()
  return Array.from(tagsMap.keys()).map(tag => {
    return {
      params: {
        tag
      }
    }
  })
}

export function getPostData (permalink) {
  secureDataPosts()
  // Read markdown file as string
  if (postsMap.has(permalink)) {
    const postDataInfo = postsMap.get(permalink)
    const postDataContent = readPostFileContent(postDataInfo.fileName)
    return { ...postDataInfo, contentHtml: postDataContent }
  }
  return {}
}

export function getTagData (tag) {
  secureDataTags()
  return tagsMap.get(tag)
}

export function getLinks () {
  // Read links file as string
  const fullPath = path.join(linksDirectory, linksFileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const result = yaml.load(fileContents)
  return result
}