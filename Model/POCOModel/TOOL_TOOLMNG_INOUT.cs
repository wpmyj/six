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
	public partial class TOOL_TOOLMNG_INOUT
	{
		public TOOL_TOOLMNG_INOUT ToPOCO(bool isPOCO = true){
			return new TOOL_TOOLMNG_INOUT(){
				ID = this.ID,
				NAME = this.NAME,
				TYPE_ID = this.TYPE_ID,
				INDATE = this.INDATE,
				MFRS = this.MFRS,
				DEP_ID = this.DEP_ID,
				STATU = this.STATU,
				REMARK = this.REMARK,
				TOOLID = this.TOOLID,
				MARKER = this.MARKER,
				MADEDATE = this.MADEDATE,
				USEDATE = this.USEDATE,
				INNAME = this.INNAME,
				CONTAINAME = this.CONTAINAME,
				EQPMVALUE = this.EQPMVALUE,
			};
		}
	} 
}