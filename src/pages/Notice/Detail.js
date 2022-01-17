import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as CommonEvt from "../../CommonEvt";
import "./notice.scss";

const NoticeDetail=()=>{
	const location = useLocation();
	const [data, setData] = useState({
		id:"",
		title:"",
		content:"",
		date:"",
		url:"",
		viewCnt:""
	});
	const navigate = useNavigate();

	useEffect(()=>{
		setData({
			id:location.state.info.id,
			title:location.state.info.title,
			publisher:location.state.info.publisher,
			content:location.state.info.content,
			date:location.state.info.registerTime,
			viewCnt:location.state.info.readCnt
		})
	},[])

	const deleteEvt=(e)=>{
		const id = e.target.value;
		console.log(id);
		CommonEvt.api.delete("/httpApi/support/notice",{
			data:{
				id:id
			}
		}).then((res)=>{
			console.log(res);
			navigate("/notice");
		}).catch((err)=>{
			console.log(err)
		})
	}

	return(
		<div id="cBody">
			<div className="sub-vis">
				<div className="bg bg4"></div>
				<h2 className="sub-title">Notice</h2>
			</div>
			<div className="notice-div inner">
				<div className="view-div">
					<div className="title-div">
						<p className="tit">{data.title}</p>
						<p className="writer">{data.publisher}</p>
						<p className="date">{data.date}</p>
					</div>

					<div className="txt-div">
						{
							data.content===null?
								<div className="no-data">
									<p>상세내용이 없습니다.</p>
								</div>
							:
								<pre>{data.content}</pre>
						}
					</div>
				</div>
				<div className="btn-wrap">
					<Link to="/notice/update" state={{idx:data.id}} className="white-btn">수정</Link>
					<button type="button" className="white-btn" value={data.id} onClick={deleteEvt}>삭제</button>
				</div>
			</div>
		</div>
	)
}

export default NoticeDetail;