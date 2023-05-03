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
      headers: Object.assign({
        'Content-Type': 'application/json',
      }, headers),
    })
    if (res.status !== 200) {
      throw res.json()
    }
    const resJson = await res.json()
    return resJson
  },
  async postData (url:string, payload:object, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: Object.assign({
        'Content-Type': 'application/json',
      }, headers),
      body: JSON.stringify(payload),
    })
    if (res.status !== 200) {
      throw res.statusText
    }
    const resJson = await res.json()
    return resJson
  },
  async putData (url:string, payload:object, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'PUT',
      headers: Object.assign({
        'Content-Type': 'application/json',
      }, headers),
      body: JSON.stringify(payload),
    })
    if (res.status !== 200) {
      throw res.statusText
    }
    const resJson = await res.json()
    return resJson
  },
  async delData (url:string, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'DELETE',
      headers: Object.assign({
        'Content-Type': 'application/json',
      }, headers),
    })
    if (res.status !== 200) {
      throw res.statusText
    }
    const resJson = await res.json()
    return resJson
  },
  async dlData (url:string, filename:string, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'GET',
      headers: Object.assign({
        'Content-Type': 'application/json',
      }, headers),
    })
    if (res.status !== 200) {
      throw res.statusText
    }
    const resBlob = await res.blob()
    return resBlob
  },
  async getDataLogged (url:string, query = {}) {
    const token = helpCookie.getAuthCookie()
    helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.getData(url, query)
  },
  async upData (url:string, formData:FormData, query = {}) {
    if (query) {
      const queryParam = new URLSearchParams(query)
      url += `?${queryParam.toString()}`
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: Object.assign({
        'Content-Type': 'multipart/form-data',
      }, headers),
    })
    if (res.status !== 200) {
      throw res.statusText
    }
    const resJson = await res.json()
    return resJson
  },
  async postDataLogged (url:string, payload:object, query = {}) {
    const token = helpCookie.getAuthCookie()
    helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.postData(url, payload, query)
  },
  async putDataLogged (url:string, payload:object, query = {}) {
    const token = helpCookie.getAuthCookie()
    helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.putData(url, payload, query)
  },
  async delDataLogged (url:string, query = {}) {
    const token = helpCookie.getAuthCookie()
    helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.delData(url, query)
  },
  async dlDataLogged (url:string, filename:string, query = {}) {
    const token = helpCookie.getAuthCookie()
    helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.dlData(url, filename, query)
  },
  async upDataLogged (url:string, formData:FormData, query = {}) {
    const token = helpCookie.getAuthCookie()
    helpCookie.setAuthCookie(token, 30)
    headers = {
      Authorization: `Bearer ${token}`,
    }
    return await this.upData(url, formData, query)
  },
}
