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
	public partial class TOOL_VIRTUAL_JOB_PLAN
	{
		public TOOL_VIRTUAL_JOB_PLAN ToPOCO(bool isPOCO = true){
			return new TOOL_VIRTUAL_JOB_PLAN(){
				JOB_NO = this.JOB_NO,
				JOB_NAME = this.JOB_NAME,
				JOB_CREATE = this.JOB_CREATE,
				PHONE = this.PHONE,
				DEMO = this.DEMO,
				JOB_STATE = this.JOB_STATE,
				USE_PERSON = this.USE_PERSON,
				DEPT_CODE = this.DEPT_CODE,
				DEPT_NAME = this.DEPT_NAME,
				JOB_FLAG = this.JOB_FLAG,
				NOTE = this.NOTE,
			};
		}
	} 
}