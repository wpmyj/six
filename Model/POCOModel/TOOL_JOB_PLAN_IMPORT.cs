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
	public partial class TOOL_JOB_PLAN_IMPORT
	{
		public TOOL_JOB_PLAN_IMPORT ToPOCO(bool isPOCO = true){
			return new TOOL_JOB_PLAN_IMPORT(){
				JOB_NO = this.JOB_NO,
				JOB_NAME = this.JOB_NAME,
				DEPT_CODE = this.DEPT_CODE,
				JOB_LEADER = this.JOB_LEADER,
				START_TIME = this.START_TIME,
				PLAN_TOOL = this.PLAN_TOOL,
				JOB_STATE = this.JOB_STATE,
				DEPT_NAME = this.DEPT_NAME,
				END_TIME = this.END_TIME,
			};
		}
	} 
}
