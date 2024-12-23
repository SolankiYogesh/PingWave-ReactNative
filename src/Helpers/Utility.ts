const isValid = (value: string): boolean => {
  const localEmail = value.toLowerCase()
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return !localEmail?.trim() || !regex.test(localEmail?.trim())
}

const wait = async (seconds = 1000): Promise<void> => {
  return new Promise((resolve: () => void) => {
    const timeout = setTimeout(() => {
      resolve()
      clearTimeout(timeout)
    }, seconds)
  })
}

const secondsToMMSS = (seconds: number): string => {
  return new Date(seconds * 1000).toISOString().substring(14, 19)
}

const hideEmail = (email: string) => {
  return email.replace(/(.{1})(.*)(?=@)/, function (_: string, gp2: string, gp3: string) {
    for (let i = 0; i < gp3.length; i++) {
      gp2 += '*'
    }
    return gp2
  })
}

export {hideEmail, isValid, secondsToMMSS, wait}
