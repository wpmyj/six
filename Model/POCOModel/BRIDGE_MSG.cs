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
	public partial class BRIDGE_MSG
	{
		public BRIDGE_MSG ToPOCO(bool isPOCO = true){
			return new BRIDGE_MSG(){
				MSG_ID = this.MSG_ID,
				MSG_CAT = this.MSG_CAT,
				NOTICE_ID = this.NOTICE_ID,
				ISSUE_DEPT_CODE = this.ISSUE_DEPT_CODE,
				ISSUE_DATE = this.ISSUE_DATE,
				SIGN_DEPT_CODE = this.SIGN_DEPT_CODE,
				SIGN_DATE = this.SIGN_DATE,
				RECEIVER = this.RECEIVER,
				PLAN_ID = this.PLAN_ID,
				MEMO = this.MEMO,
				CRT_TM = this.CRT_TM,
				CRT_NAME = this.CRT_NAME,
			};
		}
	} 
}
