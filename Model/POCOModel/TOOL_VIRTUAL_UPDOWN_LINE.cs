//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class TOOL_VIRTUAL_UPDOWN_LINE
	{
		public TOOL_VIRTUAL_UPDOWN_LINE ToPOCO(bool isPOCO = true){
			return new TOOL_VIRTUAL_UPDOWN_LINE(){
				SID = this.SID,
				JOB_NO = this.JOB_NO,
				TOOL_IDS = this.TOOL_IDS,
				TOOL_NAMES = this.TOOL_NAMES,
				TOOL_UPDOWNLINE_TIME = this.TOOL_UPDOWNLINE_TIME,
				DEMO = this.DEMO,
				TOOL_UPDOWNLINE_STATU = this.TOOL_UPDOWNLINE_STATU,
				ALERM = this.ALERM,
				LNG = this.LNG,
				LAT = this.LAT,
			};
		}
	} 
}
