import  Supabase  from "../../Supabase/Client"
import { useEffect, useState } from "react"

function useTableRead({
    tableName,
    filterData = [],
    selectString = '*',
    dependencies = [],
    single = false
}) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    async function fetchData() {
        try {
            setLoading(true)
            const sbQuery = Supabase.from(tableName).select(selectString)

            filterData.forEach((filter) => {
                if (filter.value == "") return

                sbQuery.filter(
                    filter.columnName,
                    filter.operator,
                    filter.value
                )
            })

            if(single) {
                sbQuery.single()
            }

            const { data, error } = await sbQuery;

            if (error) {
                throw error;
            }

            if (data) {
                setData(data)
                console.log(tableName, ":: ", data, filterData)
            }

            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [...dependencies])

    return [data, loading, error]
}

export default useTableRead
