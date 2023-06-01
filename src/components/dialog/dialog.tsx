'use client'

import { fetchCompletion, fetchCompletionJp } from "@/data-access"
import styled from "@emotion/styled"
import { Button, Skeleton, TextField } from "@mui/material"
import { useCallback, useState } from "react"

const Wrapper = styled.div`
    width: 800px;
    max-width: 100%;
    padding: 20px;
    margin: 0px auto;
`

const WrapperOptions = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const WrapperAction = styled.div`
    display: flex;
    justify-content: center;
`

const WrapperResult = styled.div`
    padding: 10px;
    width: 100%;
    min-height: 400px;
    border-radius: 4px;
    border: 1px solid #00000040;
`

export const Dialog = () => {
    const [mode, setMode] = useState('EN-JP')
    const [query, setQuery] = useState('')
    const [response, setResponse] = useState<{ text: string }>()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(false)

    const handleFetchCompletion = useCallback(async () => {
        setIsFetching(true)
        setError(false)
        const newResponse = mode === 'EN-JP' ? await fetchCompletion(query) : await fetchCompletionJp(query)

        if (!newResponse) {
            setError(true)
            setIsFetching(false)
            return
        }

        console.log(newResponse)

        setResponse(newResponse)
        setIsFetching(false)
    }, [query, mode])

    return (
        <Wrapper>
            <WrapperOptions>
                <Button sx={{ marginRight: 1 }} onClick={() => {setMode('EN-JP')}} variant={mode === 'EN-JP' ? 'contained' : 'outlined'}>EN - JP</Button>
                <Button onClick={() => {setMode('JP-EN')}} variant={mode === 'JP-EN' ? 'contained' : 'outlined'}>JP - EN</Button>
            </WrapperOptions>

            <TextField fullWidth multiline id="outlined-basic" label="Type here a sentence to translate" variant="outlined" onChange={(e) => {
                setQuery(e.target.value)
            }}/>

            <WrapperAction>
                <Button variant="contained" sx={{ marginBottom: 2, marginTop: 1 }} fullWidth onClick={handleFetchCompletion}>Click to Translate</Button>
            </WrapperAction>

            {isFetching && <>
                <Skeleton height={"30px"} sx={{ bgcolor: 'grey.400' }} />
                <Skeleton height={"30px"} sx={{ bgcolor: 'grey.400' }} />
                <Skeleton height={"30px"} sx={{ bgcolor: 'grey.400' }} />
            </>}

            {!isFetching && error && <p style={{ color: 'red'}}>Oops, something went wrong, please try again later.</p>}

            {!isFetching && !error && response && response.text && <WrapperResult>
                {!isFetching && response && response.text && <span style={{"whiteSpace": "pre-line"}} dangerouslySetInnerHTML={{__html: response.text}}></span>}
            </WrapperResult>}
        </Wrapper>
    )
}