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
	public partial class T_LKJ_FLOW_REFERENCE
	{
		public T_LKJ_FLOW_REFERENCE ToPOCO(bool isPOCO = true){
			return new T_LKJ_FLOW_REFERENCE(){
				FLOWID = this.FLOWID,
				MAXWORKID = this.MAXWORKID,
				LASTDATE = this.LASTDATE,
			};
		}
	} 
}
