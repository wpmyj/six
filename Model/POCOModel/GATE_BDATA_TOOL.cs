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
	public partial class GATE_BDATA_TOOL
	{
		public GATE_BDATA_TOOL ToPOCO(bool isPOCO = true){
			return new GATE_BDATA_TOOL(){
				ID = this.ID,
				NAME = this.NAME,
				TYPE = this.TYPE,
				MFRS = this.MFRS,
				DEPT_CODE = this.DEPT_CODE,
				STATUS = this.STATUS,
				REMARK = this.REMARK,
				TOOLID = this.TOOLID,
				MARKER = this.MARKER,
				MADEDATE = this.MADEDATE,
				USEDATE = this.USEDATE,
			};
		}
	} 
}
