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
	public partial class T_LKJ_FLOW_MESSAGE
	{
		public T_LKJ_FLOW_MESSAGE ToPOCO(bool isPOCO = true){
			return new T_LKJ_FLOW_MESSAGE(){
				GID = this.GID,
				FLOWID = this.FLOWID,
				WORKID = this.WORKID,
				MESSAGE = this.MESSAGE,
				SENDUSERID = this.SENDUSERID,
				SENDTIME = this.SENDTIME,
				ISSEND = this.ISSEND,
				RECEIVEUSERID = this.RECEIVEUSERID,
				RECEIVETIME = this.RECEIVETIME,
				ISRECEIVE = this.ISRECEIVE,
				MESSAGETYPE = this.MESSAGETYPE,
			};
		}
	} 
}
