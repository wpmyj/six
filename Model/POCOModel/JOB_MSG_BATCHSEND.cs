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
	public partial class JOB_MSG_BATCHSEND
	{
		public JOB_MSG_BATCHSEND ToPOCO(bool isPOCO = true){
			return new JOB_MSG_BATCHSEND(){
				PKID = this.PKID,
				MEMBER_ID = this.MEMBER_ID,
				MOBILE = this.MOBILE,
				MSG = this.MSG,
				NOTE = this.NOTE,
				UPDATE_DATE = this.UPDATE_DATE,
				UPDATE_USER = this.UPDATE_USER,
			};
		}
	} 
}