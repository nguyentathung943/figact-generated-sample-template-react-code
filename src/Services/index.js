import axios from 'axios'
const requestHeader = {"Authorization": 'Bearer keyAxybpNYDCTnazV'}
        
const processRecords = (records) => {
            let objectList = []
            records.forEach((record = {}) => {
                let recordObject = {}
                let recordValues = Object.entries(record.fields)
        
                if (recordValues.length === 0) return
        
                var isValidObject = false
                recordValues.forEach((element = []) => {
                    let [key = null, value = null] = element
                    if (key && value && !(key === 'ID')) {
                        isValidObject = true
                        if (typeof (value) === typeof ([])) {
                            const url = value[0]['thumbnails']['full']['url'] || value[0]['url']
                            recordObject[key.toString()] = url
                        }
                        else {
                            recordObject[key.toString()] = value
                        }
                    }
                })
                
                if (isValidObject) {
                    objectList.push(recordObject)
                }
            })
            return objectList
        }
        
        export const getListData = (url, setState) => {
            return async () => {
                const response = await axios.get(url, {
                    headers: { ...requestHeader }
                })
                if (response.status === 200) {
                    let processedRecords = processRecords(response.data.records || [])
                    setState(processedRecords)
                }
            }
        }
        
        const processDataValue = (records, rowIndex) => {
            let returnValue = ''
            if (records.length - rowIndex <= 0 || records.length - rowIndex > records.length) {
                return returnValue
            }
        
            let object = records[rowIndex]
            
            let parsedArr = Object.entries(object.fields)
            if (parsedArr.length === 0) return returnValue

            let [key = null, value = null] = parsedArr[0]

            if (key && value) {
                if (typeof (value) === typeof ([])) {
                    returnValue = value[0]['url']
                }
                else {
                    returnValue = value
                }
            }
            
            return returnValue
        }
        
        export const getDataValue = (url, setState, rowIndex) => {
            return async () => {
                const response = await axios.get(url, {
                    headers: { ...requestHeader }
                })
                if (response.status === 200) {
                    // Row i means index i-1 in array
                    let processedValue = processDataValue(response.data.records || [], rowIndex - 1)
                    setState(processedValue)
                }
            }
        }
        
        