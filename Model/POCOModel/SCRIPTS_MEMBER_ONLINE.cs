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
	public partial class SCRIPTS_MEMBER_ONLINE
	{
		public SCRIPTS_MEMBER_ONLINE ToPOCO(bool isPOCO = true){
			return new SCRIPTS_MEMBER_ONLINE(){
				PHONE = this.PHONE,
				ONLINE_TIME = this.ONLINE_TIME,
				LINE_NAME = this.LINE_NAME,
				DIRECTION = this.DIRECTION,
				MILEAGE = this.MILEAGE,
				ONLINESTATU = this.ONLINESTATU,
				CONTENT = this.CONTENT,
			};
		}
	} 
}
