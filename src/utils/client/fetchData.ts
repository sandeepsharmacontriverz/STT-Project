

export interface FetchResult<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
  }
  
  export const fetchData = async <T>(url: string, signal: AbortSignal): Promise<FetchResult<T>> => {
    const result: FetchResult<T> = { data: null, error: null, loading: true };
    try {
      const response = await fetch(url, { signal });
      const data: T = await response.json();
      result.data = data;
    } catch (error: any) {
       result.error = error.message;
    } finally {
      result.loading = false;
    }
  
    return result;
  };
  