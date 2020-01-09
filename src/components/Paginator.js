import React,{useState, useEffect} from 'react'

/*
 This is a dummy paginator
*/
// f6 link dim ba ph3 pv2 mb2 dib mid-gray
const defaultClassName = "ph3 pv2 ba br2 ma1 link mid-gray ba "
export default function Paginator({currentPage, pageCount, onPageChange}){
    const [pageNumbers, setPageNumbers] = useState([])
    useEffect(()=>{
        let temp =[1]
        while(temp.length<pageCount) temp.push(temp.length+1)
        setPageNumbers(temp)
    },[pageCount])
    
    return (<div className="flex items-center justify-center pa4 w-100">
            <button className={defaultClassName+'bg-light-gray'}>&#10092;</button>
            {pageNumbers.map((pn) => (
                    <button 
                        className={defaultClassName+(currentPage+1===pn?'red bg-white':'bg-mid-gray')} 
                        key={pn} 
                        onClick={()=>onPageChange(pn-1)}>
                        {pn}
                    </button>))}
            <button className={defaultClassName+'bg-light-gray'}>&#10093;</button>
        </div>
    )
}

