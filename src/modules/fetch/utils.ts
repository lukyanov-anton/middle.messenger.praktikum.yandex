 export function queryStringify<T = {}>(data:T) {    
    if (!data) return "";  
    const query = Object.entries(data)
      .map(([key, value]) => `${key}=${value.toString()}`)
      .join("&");
    return `?${query}`;
  }

