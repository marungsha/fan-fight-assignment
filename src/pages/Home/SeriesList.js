import React, { useState } from 'react'
import { SCHEDULES } from './../../Queries'
import { useQuery } from '@apollo/client'
import Paginator from './../../components/Paginator'
import Loading from './../../components/Loading'
import Error from './../../components/Error'
import moment from 'moment'
import './series-list.css'
const defaultFlag = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTFweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgNTEgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5mbGFnX2VtcHR5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9ImhvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJmbGFnX2VtcHR5IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRTFFMUUxIiB4PSIwIiB5PSIyMSIgd2lkdGg9IjUxIiBoZWlnaHQ9IjExIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjExIiB3aWR0aD0iNTEiIGhlaWdodD0iMTAiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0UxRTFFMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxIiBoZWlnaHQ9IjExIj48L3JlY3Q+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTdGFyIiBmaWxsPSIjRDhEOEQ4IiBwb2ludHM9IjI1IDE4IDIyLjY0ODg1OSAxOS4yMzYwNjggMjMuMDk3ODg3IDE2LjYxODAzNCAyMS4xOTU3NzM5IDE0Ljc2MzkzMiAyMy44MjQ0Mjk1IDE0LjM4MTk2NiAyNSAxMiAyNi4xNzU1NzA1IDE0LjM4MTk2NiAyOC44MDQyMjYxIDE0Ljc2MzkzMiAyNi45MDIxMTMgMTYuNjE4MDM0IDI3LjM1MTE0MSAxOS4yMzYwNjgiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlN0YXIiIGZpbGw9IiNEOEQ4RDgiIHBvaW50cz0iMTQgMTcuNSAxMi4yMzY2NDQyIDE4LjQyNzA1MSAxMi41NzM0MTUyIDE2LjQ2MzUyNTUgMTEuMTQ2ODMwNSAxNS4wNzI5NDkgMTMuMTE4MzIyMSAxNC43ODY0NzQ1IDE0IDEzIDE0Ljg4MTY3NzkgMTQuNzg2NDc0NSAxNi44NTMxNjk1IDE1LjA3Mjk0OSAxNS40MjY1ODQ4IDE2LjQ2MzUyNTUgMTUuNzYzMzU1OCAxOC40MjcwNTEiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlN0YXIiIGZpbGw9IiNEOEQ4RDgiIHBvaW50cz0iMzYgMTcuNSAzNC4yMzY2NDQyIDE4LjQyNzA1MSAzNC41NzM0MTUyIDE2LjQ2MzUyNTUgMzMuMTQ2ODMwNSAxNS4wNzI5NDkgMzUuMTE4MzIyMSAxNC43ODY0NzQ1IDM2IDEzIDM2Ljg4MTY3NzkgMTQuNzg2NDc0NSAzOC44NTMxNjk1IDE1LjA3Mjk0OSAzNy40MjY1ODQ4IDE2LjQ2MzUyNTUgMzcuNzYzMzU1OCAxOC40MjcwNTEiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="


function ItemHeader({seriesName}){
    return (
        <div>
            <div className="divider"></div>
            <div className="flex justify-between items-center pa3"><span className="f7 fw5">{seriesName} </span><span className="f7 gray mr2"> ❯ </span></div>
            <div className="divider"></div>
        </div>
    )
}

function ItemTeams({homeTeamName, awayTeamName}){
    return (
        <div className="flex mb2">
            <div className="flex w-100 flex-column justify-center items-evenly">
                <span className="flex w-50 pv2">
                    <img alt="" src={defaultFlag}  className="h1 w15 shadow-4 "/>
                    <span className="mh3 f6 fw6"> {homeTeamName} </span>
                </span>
                <span className="flex w-50 pv2">
                    <img alt="" src={defaultFlag} className="h1 w15 shadow-4 "/>
                    <span className="mh3 f6 fw6"> {awayTeamName} </span>
                </span>
            </div>
        </div>
    )
}

function TimeToToss({startDate}){
    return (
        <div className="flex justify-center">
            <span className="pa1 f6 bg-orange_2 mt1 truncate br4"> {moment.unix(startDate/1000).fromNow()} to toss</span>
        </div>
    )
}

function seriesItem({matchID, seriesName, matchNumber, venue, homeTeamName, awayTeamName, startDate }){

    return (
    <div className="mb3 w-100 w-50-ns pa2 pt0 pt2-ns" key={matchID}>
        <div className="bg-white">
            <ItemHeader seriesName={seriesName} />
            <div className="mh3 pb2">
            <p className="ma0 mv3 f7 fw5"> {matchNumber}. {venue}</p>
                <ItemTeams homeTeamName={homeTeamName} awayTeamName={awayTeamName} />
                <TimeToToss startDate={startDate} />
                <div className="divider_2 mt-2 mb3"></div>
            </div>
        </div>
    </div>
    )
}

export default function({type,status}) {
    const [page, setPage] = useState(0)
    const [pageCount] = useState(1)
    const {loading, error, data} = useQuery(SCHEDULES, {
        variables: { type, status, page },
    })
    
    if(loading) return <Loading />
    if(error)   return <Error />

    return (
        <div className="flex flex-row flex-wrap">
            {data.schedule.map(matchItem => seriesItem(matchItem))}
            <Paginator currentPage={page} pageCount={pageCount} onPageChange={setPage} />
        </div>
    )
}
