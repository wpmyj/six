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
	public partial class BROKENRAIL_WARN_CONTROL
	{
		public BROKENRAIL_WARN_CONTROL ToPOCO(bool isPOCO = true){
			return new BROKENRAIL_WARN_CONTROL(){
				PKID = this.PKID,
				DEPT_CODE = this.DEPT_CODE,
				LINE_NAME = this.LINE_NAME,
				SECTION_ID = this.SECTION_ID,
				WARN_STATE = this.WARN_STATE,
				START_TIME = this.START_TIME,
				END_TIME = this.END_TIME,
				OP_NAME = this.OP_NAME,
				OP_TIME = this.OP_TIME,
				USER_NAME = this.USER_NAME,
				COMMENTS = this.COMMENTS,
				FLAG = this.FLAG,
				REASON = this.REASON,
				MILE_START = this.MILE_START,
				MILE_END = this.MILE_END,
				LINE_DIR = this.LINE_DIR,
			};
		}
	} 
}
