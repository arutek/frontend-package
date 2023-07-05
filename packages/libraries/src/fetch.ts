import helpCookie from '@arutek/package-helpers/src/cookie'

let headers = {}

export default {
  async getData (url:string, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'GET',
      headers: Object.assign(headers, {'content-type': 'application/json'}),
    })
    if (res.status !== 200) {
      throw await res.json()
    }
    return await res.json()
  },
  async postData (url:string, payload:object, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'POST',
      headers:  Object.assign(headers, {'content-type': 'application/json'}),
      body: JSON.stringify(payload),
    })
    if (res.status !== 200) {
      throw await res.json()
    }
    return await res.json()
  },
  async putData (url:string, payload:object, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'PUT',
      headers: Object.assign(headers, {'content-type': 'application/json'}),
      body: JSON.stringify(payload),
    })
    if (res.status !== 200) {
      throw await res.json()
    }
    return await res.json()
  },
  async delData (url:string, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'DELETE',
      headers: Object.assign(headers, {'content-type': 'application/json'}),
    })
    if (res.status !== 200) {
      throw await res.json()
    }
    return await res.json()
  },
  async dlData (url:string, filename = 'file', query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'GET',
      headers: Object.assign(headers, {'content-type': 'application/json'}),
    })
    if (res.status !== 200) {
      throw await res.json()
    }
    const blob =  await res.blob()
    const blobUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')
    const contentDisposition = res.headers.get('Content-Disposition')
    console.log('hasil: ', contentDisposition)
    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename=(.+)$/)
      console.log(filenameMatch)
      if (filenameMatch && filenameMatch.length > 1) filename = filenameMatch[1]
    }
    a.href = blobUrl
    a.download = filename
    a.style.display = 'none'
    a.click()
    return
  },
  async upData (url:string, formData:FormData, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: formData,
    })
    if (res.status !== 200) {
      throw await res.json()
    }
    return await res.json()
  },
  async getDataLogged (url:string, query = {}) {
    const token = helpCookie.getAuthCookie()
    // helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.getData(url, query)
  },
  async postDataLogged (url:string, payload:object, query = {}) {
    const token = helpCookie.getAuthCookie()
    // helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.postData(url, payload, query)
  },
  async putDataLogged (url:string, payload:object, query = {}) {
    const token = helpCookie.getAuthCookie()
    // helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.putData(url, payload, query)
  },
  async delDataLogged (url:string, query = {}) {
    const token = helpCookie.getAuthCookie()
    // helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.delData(url, query)
  },
  async dlDataLogged (url:string, filename?:string, query = {}) {
    const token = helpCookie.getAuthCookie()
    // helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.dlData(url, filename, query)
  },
  async upDataLogged (url:string, formData:FormData, query = {}) {
    const token = helpCookie.getAuthCookie()
    // helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.upData(url, formData, query)
  },
}
