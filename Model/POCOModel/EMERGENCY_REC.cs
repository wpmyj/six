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
	public partial class EMERGENCY_REC
	{
		public EMERGENCY_REC ToPOCO(bool isPOCO = true){
			return new EMERGENCY_REC(){
				PKID = this.PKID,
				DEPT_CODE = this.DEPT_CODE,
				DEPT_NAME = this.DEPT_NAME,
				SERIAL_NUMBER = this.SERIAL_NUMBER,
				V_DATETIME = this.V_DATETIME,
				V_ADDR = this.V_ADDR,
				BREAK_DIS = this.BREAK_DIS,
				RES_POINT = this.RES_POINT,
				MEMO = this.MEMO,
				MARK = this.MARK,
				REMARK = this.REMARK,
			};
		}
	} 
}
