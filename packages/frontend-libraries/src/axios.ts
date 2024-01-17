import axios from 'axios'
import helpCookie from '@arutek/core-app/helpers/cookie'


export const postData = async (url: string, payload: object, query = {}, headers = {})=> {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.post(url, payload, {
    headers:  Object.assign(
      headers,
      {'content-type': 'application/json'}
    )
  })
  if (res.status !== 200) {
    throw res.data
  }
  return res.data
}
export const getData = async (url: string, query = {}, headers = {}) => {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.get(url, {
    headers:  Object.assign(
      headers,
      {'content-type': 'application/json'}
    ),
  })
  if (res.status !== 200) {
    throw res.data
  }
  return res.data
}
export const putData = async (url: string, payload: object, query = {}, headers = {}) => {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.put(url, payload, {
    headers: Object.assign(headers, {
      'content-type': 'application/json',
    }),
  })
  if (res.status !== 200) {
    throw res.data
  }
  return res.data
}
export const delData = async (url: string, query = {}, headers = {}) => {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.delete(url, {
    headers: Object.assign(headers, {
      'content-type': 'application/json',
    }),
  })
  if (res.status !== 200) {
    throw res.data
  }
  return res.data
}
export const dlFile = async (url: string, filename = 'file', query = {}, headers = {}) => {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.get(url, {
    headers: Object.assign(headers, {
      'content-type': 'application/json',
    }),
  })
  if (res.status !== 200) {
    throw res.data
  }
  // @ts-ignore
  const a = document.createElement('a')
  const contentDisposition = res.headers['content-disposition']
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(/filename=(.+)$/)
    if (filenameMatch && filenameMatch.length > 1) filename = filenameMatch[1]
  }
  a.href = res.data
  a.download = filename
  a.style.display = 'none'
  //@ts-ignore
  document.body.appendChild(a)
  a.click()
  //@ts-ignore
  document.body.removeChild(a)
  return
}
export const dlBlob = async (url: string, filename = 'file', query = {}, headers = {}) => {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.get(url, {
    headers: Object.assign(headers, {
      'content-type': 'application/json',
    }),
    responseType: 'blob',
  })
  if (res.status !== 200) {
    throw res.data
  }
  const blob = new Blob([res.data], { type: res.headers['content-type'] })
  const blobUrl = URL.createObjectURL(blob)
  // @ts-ignore
  const a = document.createElement('a')
  const contentDisposition = res.headers['content-disposition']
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(/filename=(.+)$/)
    if (filenameMatch && filenameMatch.length > 1) filename = filenameMatch[1]
  }
  a.href = blobUrl
  a.download = filename
  a.style.display = 'none'
  //@ts-ignore
  document.body.appendChild(a)
  a.click()
  //@ts-ignore
  document.body.removeChild(a)
  return
}
export const dlPostFile = async (url:string, filename = 'file', payload: object, query = {}, headers = {}) => {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.post(url, payload, {
    headers: Object.assign(headers, {
      'content-type': 'application/json',
    }),
    responseType: 'blob',
  })
  if (res.status !== 200) {
    throw res.data
  }
  // @ts-ignore
  const a = document.createElement('a')
  const contentDisposition = res.headers['content-disposition']
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(/filename=(.+)$/)
    if (filenameMatch && filenameMatch.length > 1) filename = filenameMatch[1]
  }
  a.href = res.data
  a.download = filename
  a.style.display = 'none'
  //@ts-ignore
  document.body.appendChild(a)
  a.click()
  //@ts-ignore
  document.body.removeChild(a)
  return
}
export const dlPostBlob = async (url: string, filename = 'file', payload: object, query = {}, headers = {}) => {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.post(url, payload, {
    headers: Object.assign(headers, {
      'content-type': 'application/json',
    }),
    responseType: 'blob',
  })
  if (res.status !== 200) {
    throw res.data
  }
  const blob = new Blob([res.data], { type: res.headers['content-type'] })
  const blobUrl = URL.createObjectURL(blob)
  // @ts-ignore
  const a = document.createElement('a')
  const contentDisposition = res.headers['content-disposition']
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(/filename=(.+)$/)
    if (filenameMatch && filenameMatch.length > 1) filename = filenameMatch[1]
  }
  a.href = blobUrl
  a.download = filename
  a.style.display = 'none'
  //@ts-ignore
  document.body.appendChild(a)
  a.click()
  //@ts-ignore
  document.body.removeChild(a)
  return
}
export const postForm = async (url: string, formData: FormData, query = {}, headers = {}) => {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.post(url, {
    headers: Object.assign(headers, {
      'content-type': 'multipart/form-data',
    }),
    body: formData,
  })
  if (res.status !== 200) {
    throw res.data
  }
  return  res.data
}
export const postXForm = async (url: string, formData: FormData, query = {}, headers = {}) => {
  if (query) {
    const queryParam = new URLSearchParams(query)
    url += `?${queryParam.toString()}`
  }
  const res = await axios.post(url, {
    headers: Object.assign(headers, {
      'content-type': 'application/x-www-form-urlencoded',
    }),
    body: formData,
  })
  if (res.status !== 200) {
    throw res.data
  }
  return  res.data
}
export const getDataLogged = async (url: string, query = {}, token = helpCookie.getAuthCookie()) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return await getData(url, query, headers)
}
export const postDataLogged = async (url: string, payload: object, query = {}, token = helpCookie.getAuthCookie()) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return await postData(url, payload, query, headers)
}
export const putDataLogged = async (url:string, payload:object, query = {}, token = helpCookie.getAuthCookie()) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return await putData(url, payload, query, headers)
}
export const delDataLogged = async (url:string, query = {}, token = helpCookie.getAuthCookie()) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return await delData(url, query, headers)
}
export const dlBlobLogged = async (url: string, filename?: string, query = {}, token = helpCookie.getAuthCookie()) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return await dlBlob(url, filename, query, headers)
}
export const dlFileLogged = async (url: string, filename?: string, query = {}, token = helpCookie.getAuthCookie()) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return await dlFile(url, filename, query, headers)
}
const postFormLogged = async (url: string, formData: FormData, query = {}, token = helpCookie.getAuthCookie()) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return await postForm(url, formData, query, headers)
}
const postXFormLogged = async (url: string, formData: FormData, query = {}, token = helpCookie.getAuthCookie()) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return await postXForm(url, formData, query, headers)
}