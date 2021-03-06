import React from "react";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";

const Accordion=(props)=>{
	const dataArr = props.data;
	const location = useLocation();
	
	const onClickActive=(e)=>{
		const target = e.target;
		if(target.className === "tit" || target.className === "accordion-btn"){
			const accorBtn = $(target).parents("li");
			if(!accorBtn.hasClass("active")){
				accorBtn.siblings().removeClass("active");
				accorBtn.addClass("active");
			}else{
				accorBtn.removeClass("active");
			}
		}
	}

  return(
		<ul className="accordion-list">
			{
				dataArr.data === null?
					<div className="no-data">
						<p>게시물이 없습니다.</p>
					</div>
				:
				dataArr.map((item)=>(
					<li key={item.id}>
						<button type="button" className="accordion-btn" onClick={onClickActive}>
							<p className="tit">{item.title}</p>
						</button>
						<div className="content-div">
							<pre>{item.content}</pre>
								
							{
								location.pathname === "/faq"?		
									<div className="btn-wrap">
										<Link to="/faq/update" state={{idx:item.id}} className="white-btn sm">수정</Link>
										<button type="button" className="white-btn sm" value={item.id} onClick={(e)=>props.deleteEvt(e)}>삭제</button>
									</div>
								:""
							}
						</div>
					</li>
				))
			}
		</ul>
  )
};

export default Accordion;